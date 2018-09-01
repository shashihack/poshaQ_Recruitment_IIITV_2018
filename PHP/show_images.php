<?php
	require "./include/db.php";
	$query = "SELECT * FROM images";
	$result = mysqli_query($con, $query);
	if(!$result) {
		echo "Error";
	} else {
		while($row = mysqli_fetch_assoc($result)) {
			?>
				<tr>
				    <td><?php echo $row['image_name']; ?></td>
				    <td><?php echo $row['image_type']; ?></td>
				    <td><?php echo $row['image_size']; ?></td>
				    <td class="text-center"><a class='btn btn-info btn-xs' href="#">Edit</a> <button class="btn btn-danger btn-xs" onclick="img_delete(<?php echo $row['image_id']; ?>)"> Del</a></td>
				</tr>
			<?php
		}
	}
?>