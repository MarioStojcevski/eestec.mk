import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Flex, Text, IconButton, Link, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";

const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex
      bg="#ffffff"
      width="100%"
      height={20}
      pl={10}
      pr={10}
      alignItems="center"
      justifyContent="space-between"
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);"
    >
      <Flex width="33.33%" justifyContent="flex-start">
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          size={"md"}
          display={{ md: "none" }}
          aria-label={"Open menu"}
          onClick={isOpen ? onClose : onOpen}
        />
        <a
          href="https://www.facebook.com/EESTECLCSkopje"
          style={{ marginTop: "auto", marginBottom: "auto" }}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <FaFacebookF size={22} color="#E52A30" />
        </a>
        <a
          href="https://www.instagram.com/eesteclcskopje/"
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "6px",
          }}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <FaInstagram size={22} color="#E52A30" />
        </a>
        <a
          href="https://www.linkedin.com/company/eestec-lcskopje/"
          style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "8px" }}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <FaLinkedinIn size={22} color="#E52A30" />
        </a>
      </Flex>
      <Flex width="33.33%" justifyContent="center">
        <Image
          src="/images/eestec-logo.png"
          width={100}
          height={100}
          alt="eestec lc skopje"
        />
      </Flex>
      <Flex width="33.33%" justifyContent="flex-end">
        <Link href={"/"}>
          <Text
            textTransform={"uppercase"}
            fontSize={18}
            color="primary"
            _hover={{ textDecoration: "underline" }}
          >
            Home
          </Text>
        </Link>
        <Link href={"/blog"} marginLeft="10px">
          <Text
            textTransform={"uppercase"}
            fontSize={18}
            color="primary"
            _hover={{ textDecoration: "underline" }}
          >
            Blog
          </Text>
        </Link>

        <Link href="/login" marginLeft="10px">
          <Text
            textTransform="uppercase"
            fontSize={18}
            color="primary"
            _hover={{ textDecoration: "underline" }}
          >
            Login
          </Text>
        </Link>

        <Link href="/register" marginLeft="10px">
          <Text
            textTransform="uppercase"
            fontSize={18}
            color="primary"
            _hover={{ textDecoration: "underline" }}
          >
            Register
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
