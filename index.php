<?php
    header('Access-Control-Allow-Origin: *');
    // root
    $shoes = new stdClass();
    $shoes->shoe = array(
        [ 
            "brand" => "Nike",
            "models" => [
                array(
                    "model" => "Air Force1",
                    "size" => "8.5",
                ),

                array(
                    "model" => "Air jordan 1",
                    "size" => "8.5",
                ),

                array(
                    "model" => "nike zoom",
                    "size" => "8.5",
                ),

                array(
                    "model" => "curry 3",
                    "size" => "8.5",
                ),

                array(
                    "model" => "lebron12",
                    "size" => "8.5",
                ),
                array(
                    "model" => "harden vol 3",
                    "size" => "8.5",
                ),

            ],
        ],
        //Next brand
        [
            "brand" => "Adidas"
        ]

);

    $data = json_encode($shoes);
    echo $data;
    
?>
