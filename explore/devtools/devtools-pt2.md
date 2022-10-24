1. the bug was that both the inputs where interpreted as a string and then added as strings and thereofore appended
2. I fixed it by explicitly casting the inputs to numbers.