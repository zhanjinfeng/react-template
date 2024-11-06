import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
    return <div className="p-8">{props.children}</div>;
}
