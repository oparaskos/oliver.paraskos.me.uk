"use client";

import { IconDefinition, IconLookup, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropsWithChildren, useEffect, useState } from "react";

export interface FoldoutProps {
    expandedIcon?: IconDefinition | IconLookup;
    collapsedIcon?: IconDefinition | IconLookup;
    text: string;
};

export const Foldout: React.FC<PropsWithChildren<FoldoutProps>> = ({ expandedIcon = faChevronDown, collapsedIcon = faChevronRight, text, children }) => {
    const [expanded, setExpanded] = useState(true); // default to true for SSR, and shown if JS is disabled.
    useEffect(() => setExpanded(false), [setExpanded]); // set to false so its hidden by default
    function toggleExpanded() {
        setExpanded(!expanded);
    }
    return (<>
        <a style={{ cursor: "pointer" }} onClick={toggleExpanded}>
            <FontAwesomeIcon icon={expanded ? expandedIcon : collapsedIcon} />{' '}
            {text}
        </a>
        <div style={{ display: expanded ? "block" : "none", paddingLeft: "4rem" }}>
            {children}
        </div>
    </>);
}