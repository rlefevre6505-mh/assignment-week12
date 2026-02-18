Setup:
npm i @clerk/nextjs
npm i @clerk/elements
npm i react-icons

# Deleting table entries wit hno primary key:

<!-- example: -->

db.query(
`DELETE FROM w12_user_locations WHERE user_id =$1 and location_id =$2`,
[4, 193],
);

<!-- README for push -->
<!-- README -->
