import {STREAMING_FIELDS, NULL} from "../constants/ServerConstants";

export function getTagString(tags) {
    let tagString = "";
    tags.forEach( tag => {
        tagString += tag.id;
        tagString += ",";
    });
    return tagString;
}

/**
 * retrieve each streaming field defined in ServerConstants and if "NULL" parse to null type
 * @param fetchedFields advanced custom fields fetched from server
 * @return Object with each of the streaming fields
 */
export function parseStreamFields(fetchedFields) {
    let streamFields = {};
    STREAMING_FIELDS.forEach( field => {
        streamFields[field] = fetchedFields[field] === NULL ? null : fetchedFields[field];
    });
    return streamFields;
}