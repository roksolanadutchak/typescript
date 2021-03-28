var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standard;
var membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["INSTAGRAM"] = "Instagram";
    SocialMedia["FB"] = "FACEBOOK";
    SocialMedia["IN"] = "LINKEDIN";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social);
