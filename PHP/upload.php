<?php
if(isset($_POST) && $_SERVER['REQUEST_METHOD'] == "POST")
{
	require "./include/db.php";
	$vpb_file_name = strip_tags($_FILES['upload_file']['name']); //File Name
	$vpb_file_id = strip_tags($_POST['upload_file_ids']); // File id is gotten from the file name
	$vpb_file_size = $_FILES['upload_file']['size']; // File Size
	$vpb_uploaded_files_location = 'uploads/'; //This is the directory where uploaded files are saved on your server
	$vpb_final_location = $vpb_uploaded_files_location . $vpb_file_name; //Directory to save file plus the file to be saved
	$vpb_file_extension = pathinfo($vpb_file_name, PATHINFO_EXTENSION);
	//Without Validation and does not save filenames in the database
	if(move_uploaded_file(strip_tags($_FILES['upload_file']['tmp_name']), $vpb_final_location))
	{	
		$query = "INSERT INTO `images`(`image_name`, `image_type`, `image_size`, `keywords`) VALUES ('$vpb_file_name', '$vpb_file_extension','$vpb_file_size','')";
		$result = mysqli_query($con, $query);
		if(!$result) {
			echo "db insert error";
			exit;
		}
		//Display the file id
		echo $vpb_file_id;
	}
	else
	{
		//Display general system error
		echo 'general_system_error';
	}

}
?>