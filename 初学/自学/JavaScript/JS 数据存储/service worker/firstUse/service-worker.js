/**
 * Created by fjl on 17/4/22.
 */
var cacheFiles = [
    'about.js',
    'blog.js'
];

self.addEventListener('install',function(event){
    event.waitUnit(
        caches.open('my-test-cache-v1').then(function(cache){
            return cache.addAll(cacheFiles);
    })
    );
});