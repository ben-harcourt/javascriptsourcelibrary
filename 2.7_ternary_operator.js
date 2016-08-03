var blah = false;
//undefined
blah === true? console.log("blah is true") : console.log("blah is false")
//blah is false
blah = true;
//true
blah === true? console.log("blah is true") : console.log("blah is false")
//blah is true
location.hostname
//blahdityblah.com
location.hostname === "localhost" ? console.log("local"): console.log("not local")
//not local
if ( location.hostname === "localhost" ) {
console.log("local")
} else {
console.log("not local")
}