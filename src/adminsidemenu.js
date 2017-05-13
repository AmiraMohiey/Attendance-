import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

export default ({ resources, onMenuTap, logout }) => (
    <div>
        <MenuItem containerElement={<Link to="/posts" />} primaryText="Posts" onTouchTap={onMenuTap} />
        <MenuItem containerElement={<Link to="/comments" />} primaryText="Comments" onTouchTap={onMenuTap} />
        <MenuItem containerElement={<Link to="/custom-route" />} primaryText="Ho" onTouchTap={onMenuTap} />
        {logout}
    </div>
);