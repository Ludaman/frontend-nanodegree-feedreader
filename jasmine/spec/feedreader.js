$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('are urls are defined', function() {
            allFeeds.forEach(function(item, index){
                expect(item.url).toBeDefined();
                expect(item.url.length).not.toBe(0);               
            });
        });

        it('are names are defined', function() {
            allFeeds.forEach(function(item, index){
                expect(item.name).toBeDefined();
                expect(item.name.length).not.toBe(0);               
            });
        });
    });

    describe('The menu', function() {

        it('is hidden by default', function(){
            //        $('body').addClass('menu-hidden');

            expect($('body:first').hasClass('menu-hidden')).toBe(true);//checking the correct css class is on the body element
        });

        it('changes visibility when clicked', function(){
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body:first').hasClass('menu-hidden')).not.toBe(true);
            menuIcon.click();
            expect($('body:first').hasClass('menu-hidden')).toBe(true);

        });

    });

    describe('Initial Entries', function() {

         beforeEach(function(done) {
            //tasks to set up tests
            //invoke done() inside callback of function call i.e.
            //addressBook.getInitialContacts(function() { done();});
            //function loadFeed(id, cb)
            loadFeed(0, function() {
                done();
            });
         });

        it('feed container not empty', function(done){
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

    describe('New Feed Selection', function() { 

         var contentPriorChange;
         beforeEach(function(done) {
            contentPriorChange = $('.feed').html();
            loadFeed(0, function() {
                done();
            });
         });

        it('changes content after load', function(done){
            var contentPostChange = $('.feed').html();
            expect(contentPriorChange).not.toBe(contentPostChange);
            done();
        });
    });
}());
