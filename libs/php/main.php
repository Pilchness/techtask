  <?php
  // Login creds
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
  // Get data from mySql
  $query = 'SELECT invoice.id, customer.id, customer.name, customer.email, invoice.product_id, invoice.product_description, invoice.time_stamp
   FROM invoice INNER JOIN customer ON invoice.customer_id=customer.id';

  $result = $conn->query($query);
  $data = [];

  while ($row = mysqli_fetch_assoc($result)) {
    array_push($data, $row);
  }

  mysqli_close($conn);
  echo json_encode($data);

  ?>