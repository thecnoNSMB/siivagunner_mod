module.exports = {
    title: "High Quality Rips Mod",
    summary: "Replaces some music files with Siivagunner versions.",
    author: "Gibus Wearing Brony",
    modVersion: 0.4,
    description: `Replaces music on the following Homestuck pages:
    <ul style="list-style-position:inside;">
    <li><a href="/homestuck/246" target="_blank">246</a></li>
    <li><a href="/homestuck/253" target="_blank">253</a></li>
    <li><a href="/homestuck/757" target="_blank">757</a></li>
    <li><a href="/homestuck/980" target="_blank">980</a></li>
    <li><a href="/homestuck/1026" target="_blank">1026</a></li>
    <li><a href="/homestuck/2792" target="_blank">2792</a></li>
    <li><a href="/homestuck/3087" target="_blank">3087</a></li>
    <li><a href="/homestuck/3297" target="_blank">3297</a></li>
    <li><a href="/homestuck/4944" target="_blank">4944</a></li>
    <li><a href="/homestuck/5238" target="_blank">5238</a></li>
    <li><a href="/homestuck/5252" target="_blank">5252</a></li>
    </ul>`,

    routes: {
        //88 would go here //Harlequin
        //90 would go here (the Namco High dadbattle rip is ideal) //Showtime
        'assets://storyfiles/hs2/00246/00246.mp3': './music/00246.mp3', //Sburban Countdown //don't work because collection
        'assets://storyfiles/hs2/10246/10246.mp3': './music/00246.mp3', //above, post-retcon, does work
        'assets://storyfiles/hs2/00253/mspa_harlequin.mp3': './music/mspa_harlequin.mp3', //also affects 338
        'assets://storyfiles/hs2/00253/afterthought-showtime_piano.mp3': './music/afterthought-showtime_piano.mp3',
        //418 would go here //Nannaquin
        'assets://storyfiles/hs2/00757/00757.mp3': './music/00757.mp3', //Explore
        //843 would go here //Harleboss
        //879 would go here //Harleboss
        //918 would go here //Dissension
        'assets://storyfiles/hs2/00980/00980_2.mp3': './music/00980_2.mp3', //Carefree Victory
        'assets://storyfiles/hs2/01026/01026.mp3': './music/01026.mp3', //The Beginning of Something Really Excellent
        //1358 would go here //Doctor
        'assets://storyfiles/hs2/songs/alterniaboundsongs/MEGALOVANIA.mp3': './music/alterniaboundsongs/MEGALOVANIA.mp3',
        'assets://storyfiles/hs2/songs/alterniaboundsongs/Horschestra.mp3': './music/alterniaboundsongs/Horschestra.mp3',
        //3000 would go here //Sunslammer
        'assets://storyfiles/hs2/03085/03085.mp3': './music/03085.mp3', //Savior of the Waking World
        'assets://storyfiles/hs2/03294/03294.mp3': './music/03294.mp3', //MeGaLoVania //don't work because collection
        'assets://storyfiles/hs2/13294/13294.mp3': './music/03294.mp3', //above, post-retcon, does work
        //3757 would go here //BL1ND JUST1C3 : 1NV3ST1G4T1ON !!
        'assets://storyfiles/hs2/04941/04941.mp3': './music/04941.mp3', //I'm A Member of the Midnight Crew (Acapella)
        'assets://storyfiles/hs2/05235/05235.mp3': './music/05235.mp3', //Unite Synchronization
        'assets://storyfiles/hs2/05249/05249.mp3': './music/05249.mp3', //Unite Synchronization
        //the following two don't work because Collection
        'assets://storyfiles/hs2/05260/resources/openbound/audio/music/FuschiaRulerQuiet.mp3': './music/openbound/FuschiaRulerQuiet.mp3',
        'assets://storyfiles/hs2/05260/resources/openbound/audio/music/FuschiaRulerQuiet.ogg': './music/openbound/FuschiaRulerQuiet.ogg',
        //5711 would go here //Trickster Mode: Engage
        //5726 would go here //Trickster Mode: Engage
        //5740 would go here //Trickster Mode: Engage
        //5759 would go here //Trickster Mode: Engage
        //6552 would go here //Fuchsia Ruler
        //other rips i'm not advanced enough for: killed by br8k spider, oppa toby style
    }
}