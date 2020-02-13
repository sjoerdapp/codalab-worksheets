// @flow
import * as React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import RunIcon from '@material-ui/icons/PlayCircleOutline';
import UploadIcon from '@material-ui/icons/CloudUploadOutlined';
import AddIcon from '@material-ui/icons/AddBoxOutlined';
import BundleBulkActionMenu from '../BundleBulkActionMenu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
class ActionButtons extends React.Component<{
    classes: {},
    onShowNewRun: () => void,
    onShowNewText: () => void,
}> {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        };
    }
    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
    this.setState({anchorEl: null});
    };

    render() {
        const {
            classes,
            onShowNewRun,
            onShowNewText,
            handleSelectedBundleCommand,
            showBundleOperationButtons,
            togglePopup,
            info,
        } = this.props;
        let editPermission = info && info.edit_permission;

        return (
            <div
                onMouseMove={(ev) => {
                    ev.stopPropagation();
                }}
            >
                {' '}
                {!showBundleOperationButtons ? (
                    <Button
                        size='small'
                        color='inherit'
                        aria-label='Add Text'
                        onClick={onShowNewText}
                        disabled={!editPermission}
                    >
                        <AddIcon className={classes.buttonIcon} />
                        Text
                    </Button>
                ) : null}
                {!showBundleOperationButtons ? (
                    <span>
                        <Button
                        size='small'
                        color='inherit'
                        aria-label='Add New Upload'
                        className={classes.uploadButton}
                        // onClick={this.handleClick}
                        disabled={!editPermission}
                    >
                        <label className={classes.uploadLabel} for='codalab-file-upload-input'>
                            <UploadIcon className={classes.buttonIcon} />
                            Upload
                        </label>
                    </Button>
                    {/* <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}>
                    <MenuItem onClick={this.handleClose}>File(s) Upload</MenuItem>
                    <MenuItem onClick={this.handleClose}>Folder Upload</MenuItem>
                    </Menu> */}
                    </span>
                ) : null}
                {!showBundleOperationButtons ? (
                    <Button
                        size='small'
                        color='inherit'
                        aria-label='Add New Run'
                        onClick={onShowNewRun}
                        disabled={!editPermission}
                    >
                        <RunIcon className={classes.buttonIcon} />
                        Run
                    </Button>
                ) : null}
                {showBundleOperationButtons ? (
                    <BundleBulkActionMenu
                        handleSelectedBundleCommand={handleSelectedBundleCommand}
                        togglePopup={togglePopup}
                    />
                ) : null}
            </div>
        );
    }
}

const styles = (theme) => ({
    container: {
        position: 'relative',
        marginBottom: 20,
        zIndex: 5,
    },
    main: {
        zIndex: 10,
        border: `2px solid transparent`,
        '&:hover': {
            backgroundColor: theme.color.grey.lightest,
            border: `2px solid ${theme.color.grey.base}`,
        },
    },
    buttonIcon: {
        marginRight: theme.spacing.large,
    },
    uploadButton: {
        padding: 0,
    },
    uploadLabel: {
        width: '100%',
        display: 'inherit',
        padding: '4px 8px',
        marginBottom: 0,
        fontWeight: 'inherit',
        cursor: 'inherit',
    },
});

export default withStyles(styles)(ActionButtons);
