# ID=2 sh curl-scripts/sign-out.sh

curl "https://wdi-library-api.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
