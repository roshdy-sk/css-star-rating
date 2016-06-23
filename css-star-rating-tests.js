// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from 'meteor/tinytest';

// Import and rename a variable exported by css-rating.js.
import { name as packageName } from 'meteor/css-rating';

// Write your tests here!
// Here is an example.
Tinytest.add('css-rating - example', (test) => {
    test.equal(packageName, 'css-rating');
});
