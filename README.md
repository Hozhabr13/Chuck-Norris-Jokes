# Chuck Norris Joke

In this project you should fetch rendomly jokes from a provided API which does not support count of jokes, for initiation project you should get 10 jokes and after that fetch new one joke and replace that with oldest joke also you should be able to favorite joke and persist them in a standalone page such as favorite page so after relodaing the favorite jokes should be shown also you are be able to remove them from favorite list, the maximum favorite item never exceed 10. 

## Usage

    yarn start

## Test
    yarn test

## build
    yarn build

## Tech Stack
**Client:** React, Typescript

**Test:** React testing library

## Tasks list

* Create a reusable component to show fetched jokes
* Call and store Api inside redux by Thunk middleware as asynchronous
* create favorite icon component to show active and inactive favorite icon and emit state to parent component
* Store favorite jokes inside local storage by watching favorite items
* Read all of constant variables as typescript Enum's
* Removing favorite joke by toggling favorited item