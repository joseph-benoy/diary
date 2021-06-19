import React, { useState,useMemo } from "react";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Createentry.scss';
import DiaryHeader from "../diaryHeader/DiaryHeader";

const CreateEntry = ()=>{
    const selectLocalImage = ()=>{
        let input = document.createElement("input");
        input.setAttribute('type','file');
        input.click();
        input.onchange = async ()=>{
            const file = input.files[0];
            if(/^image\//.test(file.type)){
                let result = await saveToServer(file);
                console.log(result);
            }
            else{
                console.log("Only images!");
            }
        }
    }
    const insertToEditor = (url)=>{
        const range = ReactQuill.getSelection();
        ReactQuill.insertEmbed(range.index, "image", url);
    }
    const saveToServer = (file)=>{
        return new Promise((resolve,reject)=>{
            resolve("Saved to server");
        });
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
            <div className="row topbar">
                <div className="col-lg-3">
                    <h2>Today's entry</h2>
                </div>
                <div className="col-lg-7">
                    <input type="text" className="form-control" placeholder="Title"/>
                </div>
                <div className="col-1">
                    <button className="saveBtn">Save</button>
                </div>
            </div>
            <div className="row" style={{marginBottom:"2vh"}}>
                <DiaryHeader/>
            </div>
            <div className="row" style={{maxHeight:"50vh"}}>
                <ReactQuill placeholder="Enter something...." theme="snow" value={value}   modules={modules} onChange={setValue}/>
            </div>
        </div>
    );
}





export default CreateEntry;