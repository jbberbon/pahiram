function GenerateAvatarName(firstName, lastName) {
  const sanitizedFirstName = firstName ? firstName.trim() : "";
  const sanitizedLastName = lastName ? lastName.trim() : "";

  // Use the first letters of both names
  const avatarName = sanitizedFirstName.charAt(0) + sanitizedLastName.charAt(0);

  return avatarName;
}

export default GenerateAvatarName
