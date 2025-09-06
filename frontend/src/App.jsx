import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Container,
  Stack,
  useDisclosure,
  Flex,
  Avatar,
  HStack,
  Link,
  Icon,
  SimpleGrid,
  Divider,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  IconButton
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCheckCircle, FaCloud, FaBullhorn, FaLightbulb, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SaasPage from './SaasPage';
import MarketingPage from './MarketingPage';
import AsesoriasPage from './AsesoriasPage';
import { forwardRef } from 'react';


const MotionBox = motion(Box);

const equipo = [

  {
    nombre: 'Juan Carlos Díaz',
    rol: 'Fullstack developer, editor y marketing',
    img: 'https://avatars.githubusercontent.com/u/169100845?v=4',
    linkedin: '#',
    github: '#'
  },

];

const clientes = [
  { nombre: 'Maitademi', logo: 'https://dummyimage.com/80x40/81e6d9/fff&text=Maitademi' }
];

function Navbar({ onOpen, colorMode, toggleColorMode, navigate }) {
  const bgNavbar = useColorModeValue(
    'linear-gradient(90deg, rgba(255,255,255,0.85) 60%, rgba(56,249,215,0.10) 100%)',
    'linear-gradient(90deg, rgba(32,32,32,0.85) 60%, rgba(56,249,215,0.10) 100%)'
  );
  const borderColor = useColorModeValue('teal.200', 'teal.700');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Flex
      as="nav"
      position="sticky"
      top={0}
      left={0}
      w="100%"
      // bg="#fff"
      bg={bgNavbar}
      boxShadow="0 4px 32px 0 rgba(56,249,215,0.10), 0 2px 8px 0 rgba(44,0,80,0.04)"
      zIndex={100}
      px={{ base: 2, md: 8 }}
      py={{ base: 2, md: 3 }}
      align="center"
      justify="space-between"
      borderBottom="2.5px solid"
      borderColor={borderColor}
      minH={{ base: "60px", md: "auto" }}
      style={{
        backdropFilter: "blur(12px)",
        borderRadius: "0 0 1.5rem 1.5rem",
        transition: "box-shadow 0.3s, background 0.3s"
      }}
    >
      <HStack spacing={2} align="center">
        <Box
          as="span"
          display="flex"
          alignItems="center"
          cursor="pointer"
          onClick={() => navigate('/')}
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.08)" }}
          style={{
            boxShadow: "0 2px 12px rgba(56,249,215,0.18)",
            borderRadius: "50%"
          }}
        >
          {/* Logo SVG */}
          <svg width="36" height="36" viewBox="0 0 32 32" fill="none" style={{ filter: "drop-shadow(0 2px 8px #38f9d7aa)" }}>
            <circle cx="16" cy="16" r="16" fill="#38f9d7"/>
            <text x="16" y="21" textAnchor="middle" fontSize="16" fill="#213547" fontWeight="bold">N</text>
          </svg>
        </Box>
        <Heading
          size="md"
          color="teal.700"
          letterSpacing="wide"
          cursor="pointer"
          onClick={() => navigate('/')}
          fontSize={{ base: "md", md: "xl" }}
          fontFamily="'Montserrat', 'Segoe UI', sans-serif"
          fontWeight="extrabold"
          transition="color 0.2s"
          _hover={{ color: "teal.500" }}
          ml={1}
        >
          NxuS.Dev
        </Heading>
      </HStack>
      {/* Desktop menu */}
      <HStack
        spacing={{ base: 2, md: 6 }}
        flexWrap="wrap"
        justify="center"
        align="center"
        display={{ base: "none", md: "flex" }}
      >
        <NxuSButton
          variant="ghost"
          fontWeight="bold"
          onClick={() => navigate('/')}
          px={2}
          py={1}
          fontSize={{ base: "sm", md: "md" }}
          _hover={{
            bg: "teal.50",
            color: "teal.700",
            boxShadow: "0 2px 12px #38f9d7aa"
          }}
        >
          Inicio
        </NxuSButton>
        <Menu>
          <MenuButton
            as={NxuSButton}
            rightIcon={<FaChevronDown />}
            variant="ghost"
            px={2}
            py={1}
            fontSize={{ base: "sm", md: "md" }}
            _hover={{
              bg: "teal.50",
              color: "teal.700",
              boxShadow: "0 2px 12px #38f9d7aa"
            }}
          >
            Servicios
          </MenuButton>
          <MenuList
            borderRadius="xl"
            boxShadow="0 4px 24px #38f9d7aa"
            bg={useColorModeValue("white", "gray.800")}
            border="1.5px solid #38f9d7"
          >
            <MenuItem onClick={() => navigate('/saas')}>SaaS</MenuItem>
            <MenuItem onClick={() => navigate('/marketing')}>Marketing</MenuItem>
            <MenuItem onClick={() => navigate('/asesorias')}>Asesorías</MenuItem>
          </MenuList>
        </Menu>
        <Link
          href="#equipo"
          fontWeight="bold"
          color="teal.600"
          fontSize={{ base: "sm", md: "md" }}
          transition="color 0.2s"
          _hover={{ color: "teal.400", textDecoration: "underline" }}
        >
          Equipo
        </Link>
        <Link
          onClick={() => navigate('/clientes')}
          fontWeight="bold"
          color="teal.600"
          fontSize={{ base: "sm", md: "md" }}
          transition="color 0.2s"
          _hover={{ color: "teal.400", textDecoration: "underline" }}
        >
          Clientes
        </Link>
        <NxuSButton
          size="sm"
          onClick={onOpen}
          px={2}
          py={1}
          fontSize={{ base: "sm", md: "md" }}
          bgGradient="linear(to-r, teal.400, blue.400)"
          color="white"
          _hover={{
            bgGradient: "linear(to-r, blue.400, teal.400)",
            color: "white",
            boxShadow: "0 2px 16px #38f9d7aa"
          }}
        >
          Contacto
        </NxuSButton>
        {/* Quitado el botón de tema claro/oscuro */}
      </HStack>
      {/* Mobile hamburger button */}
      <IconButton
        aria-label="Abrir menú"
        icon={menuOpen ? <FaTimes /> : <FaBars />}
        variant="ghost"
        color="#319795"
        fontSize="2xl"
        display={{ base: "flex", md: "none" }}
        onClick={() => setMenuOpen(!menuOpen)}
        zIndex={200}
        bg="whiteAlpha.700"
        borderRadius="full"
        boxShadow="0 2px 8px #38f9d7aa"
        transition="all 0.2s"
        _hover={{ bg: "teal.50" }}
      />
      {/* Mobile menu */}
      {menuOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          bg={useColorModeValue("rgba(255,255,255,0.98)", "rgba(32,32,32,0.98)")}
          boxShadow="2xl"
          px={8}
          py={12}
          zIndex={999}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          style={{
            backdropFilter: "blur(12px)"
          }}
        >
          <IconButton
            aria-label="Cerrar menú"
            icon={<FaTimes />}
            variant="ghost"
            color="#319795"
            fontSize="2xl"
            alignSelf="flex-end"
            mb={6}
            onClick={() => setMenuOpen(false)}
            bg="whiteAlpha.700"
            borderRadius="full"
            boxShadow="0 2px 8px #38f9d7aa"
            _hover={{ bg: "teal.50" }}
          />
          <VStack align="start" spacing={6} w="100%">
            <NxuSButton variant="ghost" fontWeight="bold" onClick={() => {navigate('/'); setMenuOpen(false);}} w="100%">
              Inicio
            </NxuSButton>
            <Menu isLazy>
              <MenuButton as={NxuSButton} rightIcon={<FaChevronDown />} variant="ghost" w="100%">
                Servicios
              </MenuButton>
              <MenuList
                borderRadius="xl"
                boxShadow="0 4px 24px #38f9d7aa"
                bg={useColorModeValue("white", "gray.800")}
                border="1.5px solid #38f9d7"
              >
                <MenuItem onClick={() => {navigate('/saas'); setMenuOpen(false);}}>SaaS</MenuItem>
                <MenuItem onClick={() => {navigate('/marketing'); setMenuOpen(false);}}>Marketing</MenuItem>
                <MenuItem onClick={() => {navigate('/asesorias'); setMenuOpen(false);}}>Asesorías</MenuItem>
              </MenuList>
            </Menu>
            <NxuSButton variant="ghost" onClick={() => {navigate('/#equipo'); setMenuOpen(false);}} w="100%">
              Equipo
            </NxuSButton>
            <NxuSButton variant="ghost" onClick={() => {navigate('/clientes'); setMenuOpen(false);}} w="100%">
              Clientes
            </NxuSButton>
            <NxuSButton size="sm" onClick={() => {onOpen(); setMenuOpen(false);}} w="100%">
              Contacto
            </NxuSButton>
            {/* Quitado el botón de tema claro/oscuro en menú móvil */}
          </VStack>
        </Box>
      )}
    </Flex>
  );
}

function Footer() {
  // Usa el hook directamente
  const bgFooter = useColorModeValue('gray.100', 'gray.900');
  const colorFooter = useColorModeValue('gray.700', 'gray.200');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Flex
        bg={bgFooter}
        color={colorFooter}
        direction="column"
        align="center"
        justify="center"
        py={10}
        px={8}
        rounded="2xl"
        shadow="xl"
        mt={10}
      >
        <Text fontSize="lg" fontWeight="bold" textAlign="center">
          © {new Date().getFullYear()} NxuS.Dev. Todos los derechos reservados.
        </Text>
      </Flex>
    </MotionBox>
  );
}

function Layout({ children, onOpen }) {
  const { isOpen, onClose } = useDisclosure();
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  // const { colorMode, toggleColorMode } = useColorMode(); // Quitado
  const navigate = useNavigate();

  return (
    <Box
      position="relative"
      minH="100vh"
      w="100%"
      maxW="100vw"
      mx="auto"
      overflowX="hidden"
      bg="#fff"
    >
      {/* Fondo animado hero */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={-1}
        bgGradient="linear(to-br, #43e97b 0%, #38f9d7 100%)"
        minH="100vh"
        overflow="hidden"
      >
        <MotionBox
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7], x: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          position="absolute"
          top="10%"
          left="5%"
          w={{ base: "180px", md: "350px" }}
          h={{ base: "180px", md: "350px" }}
          bg="green.300"
          rounded="full"
          filter="blur(80px)"
        />
        <MotionBox
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          position="absolute"
          bottom="10%"
          right="10%"
          w={{ base: "120px", md: "250px" }}
          h={{ base: "120px", md: "250px" }}
          bg="teal.400"
          rounded="full"
          filter="blur(60px)"
        />
      </Box>
      <Box
        w="100%"
        maxW={{ base: "100vw", sm: "480px", md: "900px", lg: "1200px" }}
        mx="auto"
        px={{ base: 2, sm: 4, md: 8 }}
      >
        <Navbar
          onOpen={onOpen}
          // colorMode={colorMode}
          // toggleColorMode={toggleColorMode}
          navigate={navigate}
        />
        {typeof children === 'function' ? children({ onOpen }) : children}
        {/* Contacto modal */}
        {isOpen && (
          <Box position="fixed" top={0} left={0} w="100vw" h="100vh" bg="blackAlpha.700" zIndex={1000} display="flex" alignItems="center" justifyContent="center">
            <MotionBox
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              bg="rgba(255,255,255,0.95)"
              p={10}
              rounded="3xl"
              shadow="2xl"
              minW="320px"
              maxW="400px"
              border="1px solid #38f9d7"
              backdropFilter="blur(8px)"
            >
              <Heading size="md" mb={4} color="teal.700">Contáctanos</Heading>
              <Box as="form" w="100%">
                <VStack spacing={4} align="stretch">
                  <Box>
                    <Text fontWeight="bold" mb={1}>Nombre</Text>
                    <input
                      value={form.nombre}
                      onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                      placeholder="Tu nombre"
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #38f9d7', fontSize: '1rem', background: 'rgba(255,255,255,0.7)' }}
                    />
                  </Box>
                  <Box>
                    <Text fontWeight="bold" mb={1}>Email</Text>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="Tu email"
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #38f9d7', fontSize: '1rem', background: 'rgba(255,255,255,0.7)' }}
                    />
                  </Box>
                  <Box>
                    <Text fontWeight="bold" mb={1}>Mensaje</Text>
                    <textarea
                      value={form.mensaje}
                      onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))}
                      placeholder="Escribe tu mensaje"
                      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #38f9d7', minHeight: '80px', fontSize: '1rem', background: 'rgba(255,255,255,0.7)' }}
                    />
                  </Box>
                </VStack>
              </Box>
              <NxuSButton mt={6} mr={3} onClick={onClose} w="100%" size="lg">
                Enviar
              </NxuSButton>
            </MotionBox>
          </Box>
        )}
        <Footer />
      </Box>
    </Box>
  );
}

function HomeContent({ onOpen }) {
  return (
    <>
      {/* Hero Section */}
      <Box
        position="relative"
        w="100%"
        maxW="100vw"
        overflow="hidden"
        // h={{ base: "120px", sm: "180px", md: "320px", lg: "420px" }} // <-- anterior
        h={{ base: "220px", sm: "300px", md: "320px", lg: "420px" }} // <-- más alto en móvil
        rounded="none"
        boxShadow="2xl"
        bg="gray.200"
      >
        <img
          src="/hero.jpg"
          alt="Hero NxuS Studio"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block"
          }}
        />
      </Box>

      {/* Servicios Section */}
      <Box id="servicios" pt={6}>
        <Heading size="lg" color="teal.700" mb={8} textAlign="center" fontWeight="bold" letterSpacing="tight">
          Nuestros Servicios
        </Heading>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} justify="center" mb={10}>
          {/* Tarjetas 3D */}
          <MotionBox
            whileHover={{ scale: 1.12, rotateZ: 2, boxShadow: '0 8px 32px #38f9d7' }}
            bgGradient="linear(to-br, white, teal.50)"
            p={8}
            rounded="3xl"
            shadow="2xl"
            flex={1}
            transition="all 0.3s"
          >
            <Icon as={FaCloud} w={14} h={14} color="teal.400" mb={3} />
            <Heading size="md" color="teal.600" mb={2}>SaaS</Heading>
            <Text mb={2}>Desarrollo e integración de soluciones SaaS personalizadas para tu negocio.</Text>
            <HStack color="teal.400" justify="center">
              <Icon as={FaCheckCircle} />
              <Text fontSize="sm">Automatización</Text>
              <Icon as={FaCheckCircle} />
              <Text fontSize="sm">Escalabilidad</Text>
            </HStack>
          </MotionBox>
          <MotionBox
            whileHover={{ scale: 1.12, rotateZ: -2, boxShadow: '0 8px 32px #38f9d7' }}
            bgGradient="linear(to-br, white, teal.50)"
            p={8}
            rounded="3xl"
            shadow="2xl"
            flex={1}
            transition="all 0.3s"
          >
            <Icon as={FaBullhorn} w={14} h={14} color="blue.400" mb={3} />
            <Heading size="md" color="teal.600" mb={2}>Marketing</Heading>
            <Text mb={2}>Optimización de campañas, análisis de datos y estrategias digitales efectivas.</Text>
            <HStack color="blue.400" justify="center">
              <Icon as={FaCheckCircle} />
              <Text fontSize="sm">SEO & SEM</Text>
              <Icon as={FaCheckCircle} />
              <Text fontSize="sm">Analítica</Text>
            </HStack>
          </MotionBox>
          <MotionBox
            whileHover={{ scale: 1.12, rotateZ: 2, boxShadow: '0 8px 32px #38f9d7' }}
            bgGradient="linear(to-br, white, teal.50)"
            p={8}
            rounded="3xl"
            shadow="2xl"
            flex={1}
            transition="all 0.3s"
          >
            <Icon as={FaLightbulb} w={14} h={14} color="yellow.400" mb={3} />
            <Heading size="md" color="teal.600" mb={2}>Asesorías</Heading>
            <Text mb={2}>Consultoría experta para potenciar el crecimiento y la innovación en tu empresa.</Text>
            <HStack color="yellow.400" justify="center">
              <Icon as={FaCheckCircle} />
              <Text fontSize="sm">Estrategia</Text>
              <Icon as={FaCheckCircle} />
              <Text fontSize="sm">Transformación Digital</Text>
            </HStack>
          </MotionBox>
        </Stack>
      </Box>
      {/* Equipo Section con parallax */}
      <Box id="equipo" mb={16}>
        <Heading size="lg" color="teal.700" mb={8} textAlign="center" fontWeight="bold">
          Nuestro Equipo
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {equipo.map((persona, idx) => (
            <MotionBox
              key={idx}
              whileHover={{ scale: 1.09, y: -10, boxShadow: '0 8px 32px #38f9d7' }}
              bg="rgba(255,255,255,0.35)"
              p={8}
              rounded="3xl"
              shadow="2xl"
              textAlign="center"
              backdropFilter="blur(10px)"
              border="1px solid #38f9d7"
              transition="all 0.3s"
            >
              <Avatar src={persona.img} size="2xl" mb={4} />
              <Heading size="md" color="teal.600">{persona.nombre}</Heading>
              <Text color="gray.500" mb={2}>{persona.rol}</Text>
              <HStack justify="center" spacing={4}>
                <Link href={persona.linkedin} isExternal>
                  <Icon as={FaLinkedin} w={7} h={7} color="teal.500" />
                </Link>
                <Link href={persona.github} isExternal>
                  <Icon as={FaGithub} w={7} h={7} color="gray.700" />
                </Link>
              </HStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>

      <Box as="hr" my={10} borderColor="teal.200" />

      {/* Clientes Section con carrusel y miniatura */}
      <Box id="clientes" mb={16}>
        <Heading size="lg" color="teal.700" mb={8} textAlign="center" fontWeight="bold">
          Nuestros Clientes
        </Heading>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 6, md: 12 }}
          align={{ base: "stretch", lg: "center" }}
        >
          {/* Descripción y características */}
          <Box flex={1} minW={0}>
            <Box
              bgGradient="linear(to-r, amber.100, orange.100)"
              px={{ base: 2, md: 4 }}
              py={2}
              rounded="full"
              display="inline-block"
              mb={4}
            >
              <Text color="amber.700" fontWeight="semibold" fontSize="sm">✨ Proyecto Destacado</Text>
            </Box>
            <Heading
              size={{ base: "md", md: "lg" }}
              bgGradient="linear(to-r, #667eea, #764ba2)"
              bgClip="text"
              fontWeight="bold"
              mb={4}
            >
              Maitademi
            </Heading>
            <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} mb={6}>
              Desarrollamos una plataforma web completa para una pastelería artesanal donde se pueden solicitar postres personalizados, así como on demand. Cuenta con un sistema de lealtad que brinda puntos a los clientes por cada compra para poder canjearlos por productos o descuentos, así como un dashboard para el administrador donde puede gestionar gastos, ventas, clientes y pedidos.
            </Text>
            {/* Features List */}
            <Box mb={6}>
              <Heading size="md" color="gray.800" mb={2}>Características Principales:</Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                <HStack>
                  <Box w={8} h={8} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                    <Text color="green.600" fontSize="sm">✓</Text>
                  </Box>
                  <Text color="gray.700">Diseño responsive</Text>
                </HStack>
                <HStack>
                  <Box w={8} h={8} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                    <Text color="green.600" fontSize="sm">✓</Text>
                  </Box>
                  <Text color="gray.700">Sistema de puntos de lealtad y dashboard de administración</Text>
                </HStack>
                <HStack>
                  <Box w={8} h={8} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                    <Text color="green.600" fontSize="sm">✓</Text>
                  </Box>
                  <Text color="gray.700">Interfaz intuitiva</Text>
                </HStack>
                <HStack>
                  <Box w={8} h={8} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                    <Text color="green.600" fontSize="sm">✓</Text>
                  </Box>
                  <Text color="gray.700">Optimización SEO</Text>
                </HStack>
              </SimpleGrid>
            </Box>
            {/* Resultados */}
            <Box bgGradient="linear(to-r, blue.50, indigo.50)" rounded="2xl" p={6} mb={6}>
              <Heading size="sm" color="gray.800" mb={3}>Resultados Obtenidos:</Heading>
              <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} textAlign="center">
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" color="blue.600">+150%</Text>
                  <Text fontSize="sm" color="gray.600">Engagement</Text>
                </Box>
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" color="green.600">4.8★</Text>
                  <Text fontSize="sm" color="gray.600">Satisfacción</Text>
                </Box>
                <Box>
                  <Text fontSize="2xl" fontWeight="bold" color="purple.600">+50</Text>
                  <Text fontSize="sm" color="gray.600">Clientes</Text>
                </Box>
              </SimpleGrid>
            </Box>
            {/* CTA Button */}
            <NxuSButton
              as="a"
              href="https://maitademi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Proyecto Completo
            </NxuSButton>
          </Box>
          {/* Miniatura personalizada Maitademi */}
          <Box flex={1} minW={0} position="relative">
            <Box
              className="css-1j8iyr1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={0}
              m={0}
              w="100%"
              maxW={{ base: "100%", md: "420px" }}
              mx="auto"
            >
              <Box className="css-1ln3c9d" w="100%">
                <Box className="css-ioyge1" w="100%">
                  <img
                    src="/maitademi.jpg"
                    alt="Maitademi Pastelería"
                    style={{
                      width: "100%",
                      maxWidth: "420px",
                      borderRadius: "1.5rem",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                      objectFit: "cover"
                    }}
                  />
                </Box>
                <Box className="css-n19vfr"></Box>
              </Box>
            </Box>
            {/* Floating Badge */}
            <Box
              position="absolute"
              top={-4}
              right={-4}
              bgGradient="linear(to-r, green.400, blue.500)"
              color="white"
              px={4}
              py={2}
              rounded="full"
              shadow="lg"
              transform="rotate(12deg)"
              fontSize={{ base: "xs", md: "sm" }}
            >
              <Text fontWeight="bold">¡Exitoso!</Text>
            </Box>
          </Box>
        </Stack>
        {/* Carrusel de logos de clientes */}
        <Box mt={12}>
          <MotionBox
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            overflow="hidden"
          >
            <Box w="100%" overflow="hidden">
              <MotionBox
                display="flex"
                animate={{
                  x: [
                    0,
                    -((clientes.length * 120) + (clientes.length * 24)),
                    0
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: Math.max(6, clientes.length * 2),
                  ease: "linear"
                }}
                gap={12}
              >
                {clientes.map((c, idx) => (
                  <Box key={idx} bg="white" p={6} rounded="xl" shadow="md" minW="120px" mx={2} transition="all 0.3s" _hover={{ boxShadow: '0 0 0 6px #38f9d7' }}>
                    <img src={c.logo} alt={c.nombre} style={{ maxHeight: 40 }} />
                  </Box>
                ))}
                {clientes.map((c, idx) => (
                  <Box key={`dup-${idx}`} bg="white" p={6} rounded="xl" shadow="md" minW="120px" mx={2} transition="all 0.3s" _hover={{ boxShadow: '0 0 0 6px #38f9d7' }}>
                    <img src={c.logo} alt={c.nombre} style={{ maxHeight: 40 }} />
                  </Box>
                ))}
              </MotionBox>
            </Box>
          </MotionBox>
        </Box>
      </Box>
    </>
  );
}

function ClientesPage() {
  return (
    <Box bgGradient="linear(to-br, slate.50, blue.50)" minH="100vh" py={0} px={0}>
      <Container maxW="container.xl" px={{ base: 2, md: 6 }}>
        <Box bg="white" rounded={{ base: "xl", md: "3xl" }} shadow="2xl" overflow="hidden">
          {/* Hero Imagen Clientes */}
          <Box
            position="relative"
            w="100%"
            h={{ base: "180px", sm: "240px", md: "340px", lg: "420px" }}
            overflow="hidden"
          >
            <img
              src="/nuestrosclientes.png"
              alt="Nuestros Clientes"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block"
              }}
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              bg="rgba(0,0,32,0.25)"
              zIndex={1}
            />
            <VStack
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              zIndex={2}
              justify="center"
              align="center"
              spacing={{ base: 2, md: 4 }}
              px={{ base: 2, md: 8 }}
            >
              <Heading
                size={{ base: "lg", sm: "xl", md: "2xl" }}
                color="white"
                fontWeight="extrabold"
                letterSpacing="tight"
                textShadow="0 4px 32px rgba(44,0,80,0.28)"
                fontFamily="'Montserrat', 'Segoe UI', sans-serif"
                textAlign="center"
              >
                
              </Heading>
              <Text
                fontSize={{ base: "sm", sm: "md", md: "xl" }}
                color="blue.100"
                fontWeight="medium"
                letterSpacing="wide"
                textShadow="0 2px 16px rgba(44,0,80,0.18)"
                textAlign="center"
                px={2}
              >
               
              </Text>
            </VStack>
          </Box>
          {/* Client Project Showcase */}
          <Box p={{ base: 3, sm: 6, lg: 12 }}>
            <Stack
              direction={{ base: "column", lg: "row" }}
              spacing={{ base: 6, md: 12 }}
              align={{ base: "stretch", lg: "center" }}
            >
              {/* Project Description */}
              <Box flex={1} minW={0}>
                <Box
                  bgGradient="linear(to-r, amber.100, orange.100)"
                  px={{ base: 2, md: 4 }}
                  py={2}
                  rounded="full"
                  display="inline-block"
                  mb={4}
                >
                  <Text color="amber.700" fontWeight="semibold" fontSize="sm">✨ Proyecto Destacado</Text>
                </Box>
                <Heading
                  size={{ base: "md", md: "lg" }}
                  bgGradient="linear(to-r, #667eea, #764ba2)"
                  bgClip="text"
                  fontWeight="bold"
                  mb={4}
                >
                  Maitademi
                </Heading>
                <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} mb={6}>
                  Desarrollamos una plataforma web completa para una pasteleria artesanal donde se pueden solicitar postres personalizados, así como on demand. Cuenta con un sistema de lealtad que brinda puntos a los clientes por cada compra para poder canjearlos por productos o descuentos, así como un dashboard para el administrador donde puede gestionar gastos, ventas, clientes y pedidos.
                </Text>
                {/* Features List */}
                <Box mb={6}>
                  <Heading size="md" color="gray.800" mb={2}>Características Principales:</Heading>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                    <HStack>
                      <Box w={8} h={8} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                        <Text color="green.600" fontSize="sm">✓</Text>
                      </Box>
                      <Text color="gray.700">Diseño responsive</Text>
                    </HStack>
                    <HStack>
                      <Box w={8} h={8} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                        <Text color="green.600" fontSize="sm">✓</Text>
                      </Box>
                      <Text color="gray.700">Sistema de puntos de lealtad y dashboard de adminsitración</Text>
                    </HStack>
                    <HStack>
                      <Box w={8} h={8} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                        <Text color="green.600" fontSize="sm">✓</Text>
                      </Box>
                      <Text color="gray.700">Interfaz intuitiva</Text>
                    </HStack>
                    <HStack>
                      <Box w={8} h={8} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                        <Text color="green.600" fontSize="sm">✓</Text>
                      </Box>
                      <Text color="gray.700">Optimización SEO</Text>
                    </HStack>
                  </SimpleGrid>
                </Box>
                {/* Results */}
                <Box bgGradient="linear(to-r, blue.50, indigo.50)" rounded="2xl" p={6} mb={6}>
                  <Heading size="sm" color="gray.800" mb={3}>Resultados Obtenidos:</Heading>
                  <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} textAlign="center">
                    <Box>
                      <Text fontSize="2xl" fontWeight="bold" color="blue.600">+150%</Text>
                      <Text fontSize="sm" color="gray.600">Engagement</Text>
                    </Box>
                    <Box>
                      <Text fontSize="2xl" fontWeight="bold" color="green.600">4.8★</Text>
                      <Text fontSize="sm" color="gray.600">Satisfacción</Text>
                    </Box>
                    <Box>
                      <Text fontSize="2xl" fontWeight="bold" color="purple.600">+50</Text>
                      <Text fontSize="sm" color="gray.600">Clientes</Text>
                    </Box>
                  </SimpleGrid>
                </Box>
                {/* CTA Button */}
                <NxuSButton
                  as="a"
                  href="https://maitademi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Proyecto Completo
                </NxuSButton>
              </Box>
              {/* Website Thumbnail + Imagen Maitademi */}
              <Box flex={1} minW={0} position="relative">
                {/* Miniatura personalizada */}
                <Box
                  className="css-1j8iyr1"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={0}
                  m={0}
                  w="100%"
                  maxW={{ base: "100%", md: "420px" }}
                  mx="auto"
                >
                  <Box className="css-1ln3c9d" w="100%">
                    <Box className="css-ioyge1" w="100%">
                      <img
                        src="/maitademi.jpg"
                        alt="Maitademi Pastelería"
                        style={{
                          width: "100%",
                          maxWidth: "420px",
                          borderRadius: "1.5rem",
                          boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                          objectFit: "cover"
                        }}
                      />
                    </Box>
                    <Box className="css-n19vfr"></Box>
                  </Box>
                </Box>
                {/* Floating Badge */}
                <Box
                  position="absolute"
                  top={-4}
                  right={-4}
                  bgGradient="linear(to-r, green.400, blue.500)"
                  color="white"
                  px={4}
                  py={2}
                  rounded="full"
                  shadow="lg"
                  transform="rotate(12deg)"
                  fontSize={{ base: "xs", md: "sm" }}
                >
                  <Text fontWeight="bold">¡Exitoso!</Text>
                </Box>
              </Box>
            </Stack>
          </Box>
          {/* Bottom CTA Section */}
          <Box
            bgGradient="linear(to-r, gray.50, blue.50)"
            px={{ base: 2, md: 8 }}
            py={{ base: 6, md: 8 }}
            textAlign="center"
            borderTop="1px solid #e2e8f0"
          >
            <Heading size={{ base: "md", md: "lg" }} color="gray.800" mb={4}>¿Listo para tu próximo proyecto?</Heading>
            <Text color="gray.600" mb={6} maxW="2xl" mx="auto" fontSize={{ base: "sm", md: "md" }}>
              Transformemos tu idea en una experiencia web excepcional que conecte con tus usuarios y haga crecer tu negocio.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} gap={4} justify="center">
              <NxuSButton>
                Iniciar Proyecto
              </NxuSButton>
              <NxuSButton>
                Ver Más Trabajos
              </NxuSButton>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// Botón personalizado reutilizable
const NxuSButton = forwardRef(({ children, ...props }, ref) => (
  <Button
    ref={ref}
    bg="#319795"
    color="white"
    px={8}
    py={4}
    rounded="xl"
    fontWeight="semibold"
    transition="all 0.3s"
    _hover={{
      bg: "white",
      color: "#319795",
      border: "2px solid #319795"
    }}
    shadow="lg"
    w={{ base: "100%", sm: "auto" }}
    {...props}
  >
    {children}
  </Button>
));

export default function App() {
  const disclosure = useDisclosure();
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout onOpen={disclosure.onOpen}>
            {props => <HomeContent onOpen={props.onOpen} />}
          </Layout>
        } />
        <Route path="/saas" element={
          <Layout onOpen={disclosure.onOpen}>
            <SaasPage />
          </Layout>
        } />
        <Route path="/marketing" element={
          <Layout onOpen={disclosure.onOpen}>
            <MarketingPage />
          </Layout>
        } />
        <Route path="/asesorias" element={
          <Layout onOpen={disclosure.onOpen}>
            <AsesoriasPage />
          </Layout>
        } />
        <Route path="/clientes" element={
          <Layout onOpen={disclosure.onOpen}>
            <ClientesPage />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}