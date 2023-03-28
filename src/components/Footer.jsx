import { Box, Flex } from "@chakra-ui/react";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box>
      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    </Box>
  );
}
