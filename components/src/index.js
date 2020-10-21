import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
     <ApprovalCard>
         <ApprovalCard>
             <div>
                 <h4>Danger!</h4>
             Are you sure you want to do this?
             </div>
             </ApprovalCard>
        <CommentDetail 
        author = "Sam" 
        timeAgo= "Today at 4:45 pm" 
         textInput="Nice one Bob!"
        avatar={faker.image.avatar()}
         />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
        author ="Luke"
         timeAgo= "Yesterday at 9:00 pm"
         textInput= "Nice article."
         avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
       author = "Alex"
       timeAgo= "Yesterday at 2:00 am"  
       textInput= "Amazing!" 
       avatar={faker.image.avatar()}
       />
       </ApprovalCard>
    </div>
  );         
};

ReactDOM.render(<App />, document.querySelector('#root'));
