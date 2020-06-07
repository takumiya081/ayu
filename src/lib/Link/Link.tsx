/* eslint-disable jsx-a11y/anchor-has-content */
import MuiLink, {LinkProps as MuiLinkProps} from '@material-ui/core/Link';
import clsx from 'clsx';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import {useRouter} from 'next/router';
import * as React from 'react';

type NextComposedProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  NextLinkProps;

// eslint-disable-next-line react/display-name
const NextComposed = React.forwardRef<HTMLAnchorElement, NextComposedProps>((props, ref) => {
  const {as, href, replace, scroll, passHref, shallow, prefetch, ...other} = props;

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a ref={ref} {...other} />
    </NextLink>
  );
});

interface LinkPropsBase {
  activeClassName?: string;
  innerRef?: React.Ref<HTMLAnchorElement>;
  naked?: boolean;
}

export type LinkProps = LinkPropsBase & NextComposedProps & Omit<MuiLinkProps, 'href'>;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function LinkComponent(props: LinkProps) {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  if (naked) {
    return <NextComposed className={className} ref={innerRef} href={href} {...other} />;
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={href as string}
      {...other}
    />
  );
}

// eslint-disable-next-line react/display-name
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <LinkComponent {...props} innerRef={ref} />
));
