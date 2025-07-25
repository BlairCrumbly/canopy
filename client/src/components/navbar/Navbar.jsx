import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { styled, alpha } from '@mui/material/styles';
import FileExplorer from './FileExplorer';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import FolderRounded from '@mui/icons-material/FolderRounded';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import EditIcon from '@mui/icons-material/Edit';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { useTreeItem } from '@mui/x-tree-view/useTreeItem';
import {
  TreeItemCheckbox,
  TreeItemIconContainer,
  TreeItemLabel,
} from '@mui/x-tree-view/TreeItem';
import { TreeItemIcon } from '@mui/x-tree-view/TreeItemIcon';
import { TreeItemProvider } from '@mui/x-tree-view/TreeItemProvider';
import { TreeItemDragAndDropOverlay } from '@mui/x-tree-view/TreeItemDragAndDropOverlay';
import { useTreeItemModel } from '@mui/x-tree-view/hooks';

// -- All your custom code definitions go here: DotIcon, styles, CustomTreeItem, etc --

export default function Navbar() {
  const [anchorPosition, setAnchorPosition] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleContextMenu = (event, item) => {
    event.preventDefault();
    setAnchorPosition({ mouseX: event.clientX + 2, mouseY: event.clientY - 6 });
    setSelectedItem(item);
  };

  const handleClose = () => {
    setAnchorPosition(null);
    setSelectedItem(null);
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: '#680909ff', minHeight: '100%'}}>
      <Typography variant="h6" gutterBottom>
        Navigation
      </Typography>
      <FileExplorer onContextMenu={handleContextMenu} />


    </Box>
  );
}
