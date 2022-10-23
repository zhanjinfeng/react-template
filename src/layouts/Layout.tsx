import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
    return (
        <div className="p-8">
            <div className=" text-2xl mb-4 font-sold">Layout</div>
            <div>{props.children}</div>
        </div>
    );
}
