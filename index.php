<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Technical Exercise</title>
</head>

<body>
  <h1>Success! The virtual host is working!</h1>
  <?php
  $servername = "localhost:3306";
  $username = "user1";
  $password = "password2";
  $db = "techtask";
  // Create connection
  $conn = mysqli_connect($servername, $username, $password, $db);
  // Check connection
  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  echo "Connected successfully";
  $query = 'SELECT invoice.id, customer.id, customer.name, customer.email, invoice.product_id, invoice.product_description, invoice.time_stamp
   FROM invoice INNER JOIN customer ON invoice.customer_id=customer.id';

  $result = $conn->query($query);


  $data = [];

  while ($row = mysqli_fetch_assoc($result)) {

    array_push($data, $row);
  }

  $output['status']['code'] = "200";
  $output['status']['name'] = "ok";
  $output['status']['description'] = "success";
  $output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
  $output['data'] = $data;

  mysqli_close($conn);
  echo json_encode($data);


  ?>
</body>

</html>