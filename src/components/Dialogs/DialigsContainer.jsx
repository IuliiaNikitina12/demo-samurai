import React from 'react';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
// import StoreContext from '../../StoreContext';


// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer> 
//             { (store) => {
//                 let state = store.getState().dialogsPage;

//                 let addMessage = () => {
//                     store.dispatch(addMessageCreator());
//                 }
//                 let changeMesageText = (body) => {
//                     store.dispatch(updateNewMessageTextCreator(body));
//                 }
//                 return (
//                     <Dialogs addMessage={addMessage} updateNewMessageBody={changeMesageText} dialogsPage={state}/>
//                 )
//             }    
//         }
//         </StoreContext.Consumer>
        
//     );
// }



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {dispatch(addMessageCreator(message));},
        updateNewMessageBody: (body) => {dispatch(updateNewMessageTextCreator(body))},
    }
}



let AuthRedirectComponent = WithAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs);