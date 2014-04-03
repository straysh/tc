$(function () {
var mentions = ['yuku_t', 'Pierre', 'Yummy', 'Chaoyang', 'Beijing'];
$('#textarea3').textcomplete([
    { // html
        match: /@(\w*)$/,
        search: function (term, callback) {
            callback($.map(mentions, function (mention) {
                return mention.indexOf(term) === 0 ? mention : null;
            }));
        },
        index: 1,
        replace: function (mention) {
            return '@' + mention + ' ';
        }
    }
]).overlay([
    {
        match: /\B@\w+/g,
        css: {
            'background-color': '#d8dfea'
        }
    }
]);
});


