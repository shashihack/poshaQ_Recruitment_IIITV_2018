<?php
	require "./include/db.php";
	if(isset($_REQUEST['id'])) {
		$path = "uploads/";
		$image_id = $_REQUEST['id'];
		$image_result = mysqli_query($con, "SELECT * FROM images WHERE image_id = $image_id");
		$image_details = mysqli_fetch_assoc($image_result);
		$image_name = $image_details['image_name'];
		$query = "DELETE FROM images where image_id=$image_id";
		$result = mysqli_query($con, $query);
		if(!$result) {
			echo "Error";
		} else {
			$query = "SELECT * FROM images";
			$result = mysqli_query($con, $query);
			unlink($path . "/" . $image_name) or die("Failed to <strong class='highlight'>delete</strong> file");
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
	} else {
		echo "Error";
	}
?>