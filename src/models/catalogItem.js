/*
 * *******************************************************************************
 *  * Copyright (c) 2018 Edgeworx, Inc.
 *  *
 *  * This program and the accompanying materials are made available under the
 *  * terms of the Eclipse Public License v. 2.0 which is available at
 *  * http://www.eclipse.org/legal/epl-2.0
 *  *
 *  * SPDX-License-Identifier: EPL-2.0
 *  *******************************************************************************
 *
 */

/**
 * @file catalogItem.js
 * @author Zishan Iqbal
 * @description This file includes a catalogItem model used by sequalize for ORM;
 */

const Sequelize = require('sequelize');
const sequelize = require('../utils/sequelize');
const Registry = require('./registry');
const User = require('./user');

const CatalogItem = sequelize.define('catalog_item', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    name: {
        type: Sequelize.TEXT,
        field: 'name'
    },
    description: {
        type: Sequelize.TEXT,
        field: 'description'
    },
    category: {
        type: Sequelize.TEXT,
        field: 'category'
    },
    config: {
        type: Sequelize.TEXT,
        field: 'config'
    },
    publisher: {
        type: Sequelize.TEXT,
        field: 'publisher'
    },
    diskRequired: {
        type: Sequelize.BIGINT,
        field: 'disk_required'
    },
    ramRequired: {
        type: Sequelize.BIGINT,
        field: 'ram_required'
    },
    picture: {
        type: Sequelize.TEXT,
        field: 'picture'
    },
    isPublic: {
        type: Sequelize.BOOLEAN,
        field: 'is_public'
    }
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // disable the modification of table names
    freezeTableName: true,
    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true
});

CatalogItem.belongsTo(Registry, {
    foreignKey: 'registry_id',
    as: 'registryId',
    onDelete: 'set null'
});

CatalogItem.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'userId',
    onDelete: 'cascade'
});

module.exports = CatalogItem;