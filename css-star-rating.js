import { Template } from 'meteor/templating';
import './css-star-rating.html';

Template.rating.onCreated(function() {
    // need unique ids for multiple elements
    this.uid = Random.id();
});

Template.rating.onRendered(function() {
    this.autorun(() => {
        const defaultValue = Template.currentData().defaultValue || 0;
        let value = Template.currentData().value;
        if (value == null) value = defaultValue;
        const selector = `.rating > input[value="${value}"]`;
        this.$(selector).prop('checked', true);
    });
});

Template.rating.helpers({
    _uid() {
        return Template.instance().uid;
    },
    disabled() {
        return Template.currentData().disabled ? 'disabled' : '';
    }
});

Template.rating.events({
    'click .rating > label'(event) {
        event.stopPropagation();
    },
    'click .rating'(event) {
        // rudimentary implementation for disabling event
        if (Template.currentData().disabled) {
            event.stopImmediatePropagation();
        }
    }
});

export const name = 'css-rating';
