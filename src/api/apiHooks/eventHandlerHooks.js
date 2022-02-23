import { useState } from "react";
import { toggleGroupMenu } from "../../redux/actions/appAction";
import { useDispatch, useSelector } from "react-redux";
import { changeEditGroupField } from "../../redux/actions/appAction";

export const useChangeInputHandler = (event) => {
    const currentState = useSelector((state) => state);
    const [state, setState] = useState({ ...currentState });

    const setField = (event) => {
        setState({
            ...currentState,
            ...{ [event.target.name]: event.target.value },
        });
    };

    return {
        state,
        setField,
    };
};

export const useClickMenuActionsHandler = () => {
    let isOpen = false;
    const dispatch = useDispatch();
    const stateMenu = useSelector((state) => state.appManager.groupMenu);
    const groupField = useSelector((state) => state.appManager.editGroupNameField);

    const toggleAction = (isMenuBtn = true, groupId) => {
        if (isMenuBtn) {
            isOpen = !stateMenu.isOpen;
            dispatch(toggleGroupMenu({isOpen, groupId }));
        } else {
            isOpen = !groupField.isOpen;
            dispatch(changeEditGroupField({isOpen, groupId}));
        }
    }

    return {
        toggleAction
    }
};
