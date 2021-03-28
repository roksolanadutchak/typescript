enum Membership {
    Simple, 
    Standard,
    Premium
}
const membership = Membership.Standard
const membershipReverse = Membership[2]

console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
    INSTAGRAM = 'Instagram',
    FB = 'FACEBOOK',
    IN = 'LINKEDIN'
}
const social = SocialMedia.INSTAGRAM
console.log(social)