import React, { useEffect, useState } from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import { profileAPI } from '../../../api/api';

const ProfileStatusWithHooks = (props) =>  {

    // let stateWithSetState = useState(false);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];
    let [editMode, setEditMode] = useState(false);

    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <div>
                {! editMode &&
                    <div>
                        <span onDoubleClick={activateMode}>{props.status || "------"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus="true" type="text" onBlur={deactivateEditMode} value={status} />
                    </div>
                }
            </div>
        );
    
}

export default ProfileStatusWithHooks;