import React, { Component } from 'react';
import NavBar from './navbar'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import { fetchJournals, deleteJournal ,editJournal, addNewJournal} from '../actions'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Form from './form'


const styles = {
    card: {
      minWidth: 275,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'none'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 34,
      color: '#3fdfca',
      fontWeight: 'bold'
    },
    pos: {
      marginBottom: 12,
    },
    fab: {
        marginTop: '40px',
      },
  };

class HomePage extends Component {
    constructor(props) {
        super(props);
          this.state = {
            isEditing: false,
           journals: '',
            activeEntry: null
          }
    
     }

componentDidMount() {
    console.log(this.props.userId)
    // this.props.fetchJournals(this.props.userId);
    this.props.fetchJournals(this.props.userId);

}

handleChanges = e => {
    this.setState({
        ...this.state,
      [e.target.name]: e.target.value
    });
  };

deleteJournal = (e , entryId) => {
    e.preventDefault();
    this.props.deleteJournal(this.props.userId, entryId)
  }
  
  addEntry = () => {
    //   e.preventDefault();
      this.props.addNewJournal(this.props.userId, {
      journals: this.state.journals,
      user_id: this.props.userId
  });
}
  
  editJournal =  entry  => {
      console.log(entry)
    this.setState({ entry: entry.entry,  isEditing: true, activeEntry: entry.id });
   
}

//like the populated form 
updateEntry = () => {
  const entry = this.props.journals.find(entry => entry.id === this.state.activeEntry) 
  const updatedEntry = {...entry, entry: this.state.entry}   //...entry=full object, entry:entry field, this.state.entry=text
  this.props.editJournal(this.props.userId, updatedEntry )
  this.setState({ entry: '', isEditing: false, activeEntry: null})
}


    render() {
       
        return (
        <div className="cards">
            <NavBar /> 
            {/* <Fab color="#343c4c" aria-label="add" className={styles.fab} styles={{margi: '40%' }}>
                <AddIcon/>
            </Fab> */}
            <Form />


        {/* mapping through journal entries */}
        {this.props.journals.map( journal => {
          
                return (
                <div> 
                 <Card className={styles.card} style={{width: '50%', margin: '40px auto', }} >
                <CardContent >
                  <p key={journal.id} > {journal.journal}</p>
                  <h3>{journal.title}</h3>
                  <p>{journal.content}</p>
                 </CardContent>
                </Card>
                  </div>
        )})}
        
        </div>
    );
  };
}


const mapStateToProps = state => {
    return {
        fetchJournals: state.fetchJournals,
        journals: state.journals,
        userId: state.userId,
        deleteJournal: state.deleteJournal,
        editJournal: state.editJournal,
        isUpdating: state.isUpdating
    }
}
 export default connect(mapStateToProps, 
    {fetchJournals, deleteJournal, editJournal, addNewJournal})
    (HomePage)
 