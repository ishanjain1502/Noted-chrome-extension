import React, { useEffect, useState } from 'react'
import EditorJS from '@editorjs/editorjs';
import EditorConfigObj from './editorConfig';
import "./editor.css";


export default function Editor() {
    const [Data, setData] = useState({});
    let editor;

    const launchEditor = () => {
        editor = new EditorJS(EditorConfigObj);
    }

    const saveData = () => {
        editor.save().then((outputData) => {
            console.log(outputData)
            setData(outputData);
        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    }
    useEffect(() => {
        launchEditor()
    })
    return (
        <>
            <h2>Note-ED Editor</h2>
            <div id='editorjs'></div>
            {/* <button className='save-text-btn' onClick={saveData}>Save Text</button> */}
        </>

    )
}