import {POSTS_BY_TAG, TAGS_URL, POST_FIELDS} from "../constants/ServerConstants";
import {getTagString} from "./ParseUtils";


export function getPostURL(tags) {
    return POSTS_BY_TAG + getTagString(tags);
}

export function getTagsUrl() {
    return TAGS_URL;
}

export function getFieldsURL(post) {
    return POST_FIELDS + post.id;
}