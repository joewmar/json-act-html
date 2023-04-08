<?php
    header('Access-Control-Allow-Origin: *');
    $musics = new stdClass();
    $musics->music = array(
        array(
            "lesson" => "History of Music",
            "outline" => array(
                "AncientEra" => array(
                    "CountryMesopotamia" => array(
                        "Instruments" => array("Bovine Lyre", "Silver Flute"),
                    ),
                    "CountryEgypt" => array(
                        "Instruments" => array("Aerophones", "Oboes"),
                    ),
                    "CountryGreece" => array(
                        "Instruments" => array("Kithara", "Bouzouki"),
                    ),
                    "CountryChina" => array(
                        "Instruments" => array("Guzheng", "Guzheng"),
                    ),
                    "CountryIndia" => array(
                        "Instruments" => array("Dhrupad", "Sahnai"),
                    ),
                ),
            ), 
        ),
        array(
            "lesson" => "Music Culture",
            "outline"=> array(
                "FolkMusic" => array(
                    "Example of Folk Songs" => "Arbucklenian Polka by Hartmann & John"
                ),

            ),
        ),
        array(
            "lesson" => "Element Music", 
            "outline" => array(
                "Melody" => array(
                    "ColorMelodies" => "Emotion Melodies",
                    "DirectionMelodies" => "It is type of melody that shift their base pitch every 1 or 2 bars. ",
                    "BlendsMelodies" => "It is type of melody that shift their base pitch every 1 or 2 bars. ",
                ),
                "Harmony" => array(
                    "Chords" => "Three or more notes",
                    "Progressions" => "the foundation of harmony",
                ),
            ),
        ),
        array(
            "lesson" => "Music Genre", 
            "outline" => array(
                "Pop" => array(
                    "Example" => "Uptown Funk by Mark Ronson feat Bruno Mars",
                ),
                "Classical" => array(
                    "Example" => "Ave Maria by Franz Schubert",
                ),
                "Rock" => array(
                    "Example" => "Back in Black by AC/DC",
                ),
                "Country" => array(
                    "Example" => "I Walk the Line by Johnny Cash",
                ),
                "Jazz" => array(
                    "Example" => "Take Five by Dave Brubeck Quartet",
                ),
            ),
        ),
        array(
            "lesson" => "MusicIndustry", 
            "outline" => array(
                "RecordingIndustry" => array(
                    "Company" => array(
                        "Name" => "Atlantic Records",
                        "Founder" => "Ahmet Ertegun and Herb Abramson",
                        "Founded" => "November 1947",
                    ),
                    
                ),
                "StreamingIndustry" => array(
                    "Company" => array(
                        "Name" => "YouTube Music",
                        "Launched" => "November 12 2015",
                    ),
                ),
            ),      
        ),
       
    );
    $musicJSON = json_encode($musics);

    echo $musicJSON;

?>
