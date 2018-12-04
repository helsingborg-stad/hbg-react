const Notice = (props) => {
    let {children, content, icon} = props;
    let {type} = props;
    const avalibleNoticeTypes = ['success', 'warning', 'danger', 'info'];
    const avalibleIcons = {
        success: 'pricon-check',
        warning: 'pricon-notice-warning',
        danger: 'pricon-notice-error',
        info: 'pricon-info-o'
    };

    type = (typeof(type) != 'undefined' && avalibleNoticeTypes.includes(type)) ? type : 'info';

    return (
        <div className={'notice ' + type}>
        {icon &&
            <i className={'pricon ' +  avalibleIcons[type]}></i>} {children || content}
        </div>
    )
}

export default Notice;
