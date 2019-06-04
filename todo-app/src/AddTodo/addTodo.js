import React from 'react';


class AddTodo extends React.Component {

    render() {
        return (<div className='addTodoContainer'>
            <form>
                <input enChange = {} type = 'text'></input>
            </form>
        </div>);
    }

    
    updateInput = (e) => {
        console.log(e);
    }

}



export default AddTodo;