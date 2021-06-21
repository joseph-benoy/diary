import React, { useState,useMemo,useEffect } from "react";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Createentry.scss';
import DiaryHeader from "../diaryHeader/DiaryHeader";
import axios from 'axios';

var quillObj = {};





const CreateEntry = ()=>{
    const [title,setTitle] = useState('');
    const selectLocalImage = ()=>{
        let input = document.createElement("input");
        input.setAttribute('type','file');
        input.setAttribute('accept','image/*');
        input.click();
        input.onchange = async ()=>{
            const file = input.files[0];
            let formData = new FormData();
            formData.append('img',file);
            if(/^image\//.test(file.type)){
                let result = await saveToServer(formData);
                insertToEditor(result.data.url);
            }
            else{
                console.error("Only images!");
            }
        }
    }
    const insertToEditor = (url)=>{
        const range = quillObj.getEditorSelection();
        quillObj.getEditor().insertEmbed(range.index, "image", url);
    }
    const saveToServer = async (data)=>{
        try{
            let result = axios.post('/addEntryImg',data);
            return result;
        }
        catch(err){
            console.error(err);
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
    const saveEntry = async ()=>{
        if(title===""){
            let element = document.getElementById('title');
            element.style = "border-color:crimson";
            element.setAttribute('placeholder','Enter a title...');
        }
        else{
            let element = document.getElementById('title');
            element.style = "border-color:#ced4da";
            element.setAttribute('placeholder','Title');
            try{
                let result = await axios.post("/saveentry",{
                    title:title,
                    data:value,
                    date:new Date().toLocaleDateString()
                });
                console.log(result.data);
            }
            catch(err){
                console.error(err);
            }
        }
    }
    useEffect(async ()=>{
        try{
          let result = await axios.get("/getToday");
          setValue(result.data.data);
          setTitle(result.data.title);
        }
        catch(err){
            console.error(err);
        }
    });
    return(
        <div className="container-fluid">
            <div className="row topbar">
                <div className="col-lg-3">
                    <h2>Today's entry</h2>
                </div>
                <div className="col-lg-7">
                    <input type="text" id="title" onChange={(e)=>{setTitle(e.target.value)}} className="form-control" placeholder="Title"/>
                </div>
                <div className="col-1">
                    <button className="saveBtn" onClick={saveEntry}>Save</button>
                </div>
            </div>
            <div className="row" style={{marginBottom:"2vh"}}>
                <DiaryHeader/>
            </div>
            <div className="row" style={{maxHeight:"50vh"}}>
                <ReactQuill  ref={(el)=>{quillObj=el}}  placeholder="Enter something...." theme="snow" value={value}   modules={modules} onChange={setValue}/>
            </div>
        </div>
    );
}





export default CreateEntry;