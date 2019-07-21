# angular-video
Git: https://github.com/ghost0224/angular-video.git

1. Created Video Player Parent Component                        Done
2. Created Player Component as a child component of Video Player Component                        Done
3. Created Controls Component as a child component of Video Player Component                        Done
4. Create Playlist Component as a child component of Video Player Component                        Done
5. Implemented Play button as one of the control in Controls Component                        Done
6. Implemented Pause button as one of the control in Controls Component                        Done
7. Implemented Volume Up button as one of the control in Controls Component                        Done
8. Implemented Volume Down button as one of the control in Controls Component                        Done
9. Implemented Reload button as one of the control in Controls Component                        Done
10. Implemented Like button as one of the control in Controls Component                        Done
11. Implemented Unlike button as one of the control in Controls Component                        Done
12. Implemented Play button as one of the control in Controls Component                        Done
13. If video is playing, the play button should be disabled                        Done
14. If video is stopped/paused, the stop/paused button should be disabled                        Done
15. You may use bootstrap glyphicons for icons in video player                        Done(I use FontAwesome)
16. When page loads for the first time, the video must not start playing by default                        Done
17. When the page loads after previous exit from the app, it must start with the video which which was open when app exited in past.          Not Done
18. Clicking on volume up button should increase playback volume                        Done
19. Clicking on volume down button shuld decrease the playback volume                        Done
20. Clicking on reload butotn should start the video playback from start                        Done
21. Mute/Unmute (headphone) is a toggle button. Clicking on it will be iteratively mute or unmute the sound in video playback.                        Done
22. Progress bar is implemented using HTML5 progress bar element. Progress bar will change the value as per the percentage of video played.                        Done
11. The value for number of likes and un-likes should be saved in local storage and retrieved from the same.                        Done
12. Clicking on like and unlike should increase and decrease the number of likes and unlikes respectively.                        Done
13. Landscape mode - Playlist will shift to right in landscape mode                        Done
14. Portrait Mode - Playlist will go towards bottom when in portrait mode                        Done
15. Clicking on item in the playlist should play the respective video in the video player, when in portrait mode                        Done
16. Clicking on item in the playlist should play the respective video in the video player, when in landscape mode                        Done
17. Bootstrap is used to make the player responsive                        Done
18. Videos are loaded in playlist by making a call to REST API created using npm package:json-server                        Done
19.	Add New Video Component                           Done
20.	Input type is 'url' to add new youtube url                        Done
21.	It should not accept bad url                        Not Done
22.	Each new URL which is added must be added to JSON file using  REST API                        Done
23.	Each new URL which is added must be added to the list of URL's in the table below                        Done
24.	User should be able to edit the URL using REST API                        Not Done
25.	User should be able to delete the URL using REST API                        Done
26.	Each URL which is added here must be available in Video Player component only after approval                        Done
27.	User will approve the URL by clicking on the link in the table. If the video plays in the new browser window, then it is approved by the user.                        Done
28.	Once video is approved, approve button is disabled.                        Done
29.	Approve button is enabled again only if video URL is edited.                        Not Done
