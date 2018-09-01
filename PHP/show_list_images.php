<?php
		require "./include/db.php";
	$query = "SELECT * FROM images";
	$path = "uploads/";
	$result = mysqli_query($con, $query);
	if(!$result) {
		echo "Error";
	} else {
		while($row = mysqli_fetch_assoc($result)) {
			?>
				<div class="col-md-6 col-sm-6 col-lg-6 col-xs-12">
					<div class="upload-image-list">
						<div class="upload-image-list-img">
							<img src="<?php echo $path.$row['image_name']; ?>" class="img-responsive">
						</div>
						<div class="upload-des">
							<h4 class="text-left">Name: <?php echo $row['image_name']; ?></h4>
							<h4 class="text-left">Type: <?php echo $row['image_type']; ?></h4>
							<h4 class="text-left">Size: <?php
															$size = $row['image_size'];
															$extension = "B";
															if($size > 1024) {
																$size /= 1024;
																$extension = "KB";							
															}
															if($size > 1024) {
																$size /= 1024;
																$extension = "MB";							
															}
															echo round($size, 2) . $extension;

														?></h4>	
						</div>
					</div>
				</div>
			<?php
		}
	}
?>