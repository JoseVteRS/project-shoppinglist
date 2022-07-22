import RcTooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';

const Tooltip = ({ children, ...rest }) => {
	return <RcTooltip {...rest}>{children}</RcTooltip>;
};

export default Tooltip;
