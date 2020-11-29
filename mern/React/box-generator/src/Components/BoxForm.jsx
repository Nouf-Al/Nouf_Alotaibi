import React, {useState} from 'react';


const BoxForm = (props) => {
    const [newColor , setNewColor] = useState()
    const [newHeight , setNewHeight] = useState()
    const [newWidth , setNewWidth] = useState()

    const addColor = (e) => {
        e.preventDefault();
        props.addNewDivColor({newColor,newHeight,newWidth})
        setNewColor('');
        setNewWidth('');
        setNewHeight('');
    }

    return (
        <>
            <form onSubmit={addColor}>
                <div className="form-group">
                    <label >Color:</label>
                    <input type="text" className="form-control"  onChange={ e => setNewColor(e.target.value) } value={newColor}/>
                </div>
                <div className="form-group">
                    <label >Height:</label>
                    <input type="text" className="form-control"  onChange={ e => setNewHeight(e.target.value) } value={newHeight}/>
                </div>
                <div className="form-group">
                    <label >Width:</label>
                    <input type="text" className="form-control"  onChange={ e => setNewWidth(e.target.value) } value={newWidth}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add" className="form-control btn btn-outline-primary btn-block"/>
                </div>
            </form>
        </>
    );
}

export default BoxForm;