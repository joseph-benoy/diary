import React, { useState,useMemo, createElement } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const CreateEntry = ()=>{
    const selectLocalImage = ()=>{
        let input = document.createElement("input");
        input.setAttribute('type','file');
        input.click();
        input.onchange = async ()=>{
            
        }
    }
    const modules = useMemo(() => ({
        toolbar: {
          container: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['image', 'code-block']
          ],
          handlers: {
            image: selectLocalImage
          }
        }
      }), []);
    const [value, setValue] = useState('');

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3">
                    <h2>Today's entry</h2>
                </div>
            </div>
            <div className="row">
                <ReactQuill placeholder="Enter something...." theme="snow" value={value}   modules={modules} onChange={setValue}/>
            </div>
        </div>
    );
}





export default CreateEntry;