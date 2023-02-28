import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
   primary = false,
   outline = false,
   rounded = false,
   small = false,
   large = false,
   text = false,
   disabled = false,
   leftIcon,
   rightIcon,
   to,
   href,
   children,
   className,
   onClick,
   ...passProps
}) {
   let Component = 'button';

   const props = {
      onClick,
      ...passProps,
   };

   //Remove event when button disabled
   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') delete props[key];
      });
   }

   if (to) {
      props.to = to;
      Component = Link;
   } else if (href) {
      props.href = href;
      Component = 'a';
   }

   const classes = cx('wrapper', {
      [className]: className, // Lay gtri cua className lam key
      primary,
      outline,
      small,
      large,
      text,
      disabled,
      rounded,
   });

   return (
      <Component className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Component>
   );
}

Button.propTypes = {
   primary: PropTypes.bool,
   outline: PropTypes.bool,
   rounded: PropTypes.bool,
   small: PropTypes.bool,
   large: PropTypes.bool,
   text: PropTypes.bool,
   disabled: PropTypes.bool,
   children: PropTypes.node.isRequired,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   to: PropTypes.string,
   href: PropTypes.string,
   className: PropTypes.string,
   //isRequired: Bắt buộc truyền children vào
};
export default Button;
