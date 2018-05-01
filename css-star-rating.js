import { Template } from 'meteor/templating';
import { Random } from 'meteor/random';
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
        const selector = `#star-${value}-${Template.instance().uid}`;
        this.$(selector).prop('checked', true);
    });
});

Template.rating.helpers({
    _uid() {
        return Template.instance().uid;
    },
    disabled() {
        return Template.currentData().disabled ? 'disabled' : '';
    },
    style() {
        return Template.currentData().style || '';
    },
    star_style(){
        return Template.currentData().star_style || '';
    },
    full_only(){
        return Template.currentData().full_only? Template.currentData().full_only : true;
    },
    enable_reset(){
        if(Template.currentData().disabled){
            return false;
        }
        else{
            return Template.currentData().enable_reset || false;
        }
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
