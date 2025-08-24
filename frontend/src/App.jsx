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
  MenuItem
} from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCheckCircle, FaCloud, FaBullhorn, FaLightbulb, FaChevronDown } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SaasPage from './SaasPage';
import MarketingPage from './MarketingPage';
import AsesoriasPage from './AsesoriasPage';


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
  { nombre: 'Maitademi', logo: 'https://dummyimage.com/80x40/81e6d9/fff&text=TechNova' },
  { nombre: 'MarketPro', logo: 'https://dummyimage.com/80x40/319795/fff&text=MarketPro' },
  { nombre: 'InnovateX', logo: 'https://dummyimage.com/80x40/38b2ac/fff&text=InnovateX' }
];

function Navbar({ onOpen, colorMode, toggleColorMode, navigate }) {
  const bgNavbar = useColorModeValue('rgba(255,255,255,0.7)', 'rgba(32,32,32,0.7)');
  const borderColor = useColorModeValue('teal.100', 'teal.700');
  return (
    <Flex
      as="nav"
      position="sticky"
      top={0}
      left={0}
      w="100%"
      bg={bgNavbar}
      boxShadow="lg"
      zIndex={10}
      px={8}
      py={3}
      align="center"
      justify="space-between"
      backdropFilter="blur(18px)"
      borderBottom="1px solid"
      borderColor={borderColor}
      style={{ transition: 'background 0.3s' }}
    >
      <HStack spacing={3}>
        <Box as="span" display="flex" alignItems="center" cursor="pointer" onClick={() => navigate('/')}>
          {/* Logo SVG */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
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
        >
          NxuS.Dev
        </Heading>
      </HStack>
      <HStack spacing={6}>
        <Button variant="ghost" colorScheme="teal" fontWeight="bold" onClick={() => navigate('/')}>
          Inicio
        </Button>
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />} colorScheme="teal" variant="ghost">
            Servicios
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => navigate('/saas')}>SaaS</MenuItem>
            <MenuItem onClick={() => navigate('/marketing')}>Marketing</MenuItem>
            <MenuItem onClick={() => navigate('/asesorias')}>Asesorías</MenuItem>
          </MenuList>
        </Menu>
        <Link href="#equipo" fontWeight="bold" color="teal.600">Equipo</Link>
        <Link onClick={() => navigate('/clientes')} fontWeight="bold" color="teal.600">Clientes</Link>
        <Button colorScheme="teal" size="sm" onClick={onOpen}>
          Contacto
        </Button>
        <Button size="sm" onClick={toggleColorMode} variant="ghost">
          {colorMode === 'light' ? '🌙' : '☀️'}
        </Button>
      </HStack>
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
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        py={10}
        px={8}
        rounded="2xl"
        shadow="xl"
        mt={10}
      >
        <Text fontSize="lg" fontWeight="bold">
          © {new Date().getFullYear()} NxuS Studio. Todos los derechos reservados.
        </Text>
        <HStack spacing={6} mt={{ base: 4, md: 0 }}>
          <Link href="mailto:contacto@nxus.studio" isExternal>
            <Icon as={FaEnvelope} w={7} h={7} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaLinkedin} w={7} h={7} />
          </Link>
          <Link href="#" isExternal>
            <Icon as={FaGithub} w={7} h={7} />
          </Link>
        </HStack>
      </Flex>
    </MotionBox>
  );
}

function Layout({ children, onOpen }) {
  const { isOpen, onClose } = useDisclosure();
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <>
      {/* Fondo animado hero */}
      <Box
        position="fixed"
        top={0}
        left={0}
        w="100%"
        h="100vh"
        zIndex={-1}
        bgGradient="linear(to-br, #43e97b 0%, #38f9d7 100%)"
        overflow="hidden"
      >
        <MotionBox
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7], x: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          position="absolute"
          top="10%"
          left="5%"
          w="350px"
          h="350px"
          bg="green.300"
          rounded="full"
          filter="blur(120px)"
        />
        <MotionBox
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          position="absolute"
          bottom="10%"
          right="10%"
          w="250px"
          h="250px"
          bg="teal.400"
          rounded="full"
          filter="blur(100px)"
        />
      </Box>

      <Navbar onOpen={onOpen} colorMode={colorMode} toggleColorMode={toggleColorMode} navigate={navigate} />
      {/* Elimina el Container y renderiza children directamente */}
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
            <Button colorScheme="teal" mt={6} mr={3} onClick={onClose} w="100%" size="lg">
              Enviar
            </Button>
          </MotionBox>
        </Box>
      )}
      <Footer />
    </>
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
        h={{ base: "420px", md: "680px", lg: "820px" }}
        rounded="none"
        boxShadow="2xl"
        bg="gray.200"
      >
        <img
          src="/hero.jpg"
          alt="Hero NxuS Studio"
          style={{
            width: "100%",
            maxWidth: "100vw",
            height: "100%",
            objectFit: "cover",
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

      {/* Clientes Section con carrusel */}
      <Box id="clientes" mb={16}>
        <Heading size="lg" color="teal.700" mb={8} textAlign="center" fontWeight="bold">
          Nuestros Clientes
        </Heading>
        <MotionBox
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          overflow="hidden"
        >
          <Box w="100%" overflow="hidden">
            <MotionBox
              display="flex"
              animate={{ x: [0, -120, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              gap={12}
            >
              {clientes.map((c, idx) => (
                <Box key={idx} bg="white" p={6} rounded="xl" shadow="md" minW="120px" mx={2} transition="all 0.3s" _hover={{ boxShadow: '0 0 0 6px #38f9d7' }}>
                  <img src={c.logo} alt={c.nombre} style={{ maxHeight: 40 }} />
                </Box>
              ))}
            </MotionBox>
          </Box>
        </MotionBox>
      </Box>
    </>
  );
}

function ClientesPage() {
  return (
    <Box bgGradient="linear(to-br, slate.50, blue.50)" minH="100vh" py={12} px={4}>
      <Container maxW="container.xl">
        <Box bg="white" rounded="3xl" shadow="2xl" overflow="hidden">
          {/* Header Section */}
          <Box bgGradient="linear(to-r, indigo.600, purple.600, blue.600)" px={8} py={12} textAlign="center">
            <Heading size="2xl" color="white" mb={4}>Mis Clientes</Heading>
            <Text fontSize="xl" color="blue.100" maxW="2xl" mx="auto">
              Proyectos web exitosos que han transformado la presencia digital de mis clientes
            </Text>
          </Box>
          {/* Client Project Showcase */}
          <Box p={{ base: 6, lg: 12 }}>
            <Stack direction={{ base: "column", lg: "row" }} spacing={12} align="center">
              {/* Project Description */}
              <Box flex={1} minW={0}>
                <Box bgGradient="linear(to-r, amber.100, orange.100)" px={4} py={2} rounded="full" display="inline-block" mb={4}>
                  <Text color="amber.700" fontWeight="semibold" fontSize="sm">✨ Proyecto Destacado</Text>
                </Box>
                <Heading size="lg" bgGradient="linear(to-r, #667eea, #764ba2)" bgClip="text" fontWeight="bold" mb={4}>
                  Maitademi
                </Heading>
                <Text color="gray.600" fontSize="lg" mb={6}>
                  Desarrollé una plataforma web completapara una pasteleria artesanal donde se pueden solicitar postres personalizados, así como on demand. Cuenta con un sistema de lealtsad que brinda puntos a los clientes por cada compra para poder canjearlos por productos o descuentos, así como un dashboard para el administrador donde puede gestionar gastos, ventas, clientes y pedidos.
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
                  <SimpleGrid columns={3} spacing={4} textAlign="center">
                    <Box>
                      <Text fontSize="2xl" fontWeight="bold" color="blue.600">+150%</Text>
                      <Text fontSize="sm" color="gray.600">Engagement</Text>
                    </Box>
                    <Box>
                      <Text fontSize="2xl" fontWeight="bold" color="green.600">4.8★</Text>
                      <Text fontSize="sm" color="gray.600">Satisfacción</Text>
                    </Box>
                    <Box>
                      <Text fontSize="2xl" fontWeight="bold" color="purple.600">128</Text>
                      <Text fontSize="sm" color="gray.600">Reseñas</Text>
                    </Box>
                  </SimpleGrid>
                </Box>
                {/* CTA Button */}
                <Button
                  as="a"
                  href="https://maitademi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  bgGradient="linear(to-r, indigo.600, purple.600)"
                  color="white"
                  px={8}
                  py={4}
                  rounded="xl"
                  fontWeight="semibold"
                  transition="all 0.3s"
                  _hover={{ bgGradient: "linear(to-r, indigo.700, purple.700)", transform: "scale(1.05)" }}
                  shadow="lg"
                >
                  Ver Proyecto Completo
                </Button>
              </Box>
              {/* Website Thumbnail + Imagen Maitademi */}
              <Box flex={1} minW={0} position="relative">
                <Box bgGradient="linear(to-br, gray.100, gray.200)" rounded="2xl" p={4} shadow="xl" mb={6}>
                  <Box bg="white" rounded="xl" overflow="hidden" shadow="lg">
                    {/* Imagen Maitademi */}
                    <Box w="100%" display="flex" justifyContent="center" alignItems="center" py={4}>
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
                    {/* Website Content Miniature */}
                    <Box bgGradient="linear(to-br, amber.50, orange.100)" p={4}>
                      {/* Header */}
                      <Box textAlign="center" mb={3}>
                        <Box h={2} bg="gray.800" rounded mb={1} w={32} mx="auto"></Box>
                        <Box h={1} bg="gray.600" rounded w={24} mx="auto"></Box>
                      </Box>
                      {/* Main Card */}
                      <Box bg="white" rounded="lg" shadow="sm" overflow="hidden" mb={3}>
                        <Box h={16} bgGradient="linear(to-r, amber.400, orange.500)" display="flex" alignItems="center" justifyContent="center">
                          <Icon viewBox="0 0 24 24" boxSize={8} color="white">
                            <path d="M12 6c-3.31 0-6 2.69-6 6 0 1.66.67 3.16 1.76 4.24l-.71.71C6.22 16.12 5.5 14.13 5.5 12c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5c0 2.13-.72 4.12-1.55 4.95l-.71-.71C16.33 15.16 17 13.66 17 12c0-3.31-2.69-6-6-6z"/>
                          </Icon>
                        </Box>
                        <Box p={3}>
                          <Flex justify="space-between" align="start" mb={2}>
                            <Box>
                              <Box h={2} bg="gray.800" rounded mb={1} w={16}></Box>
                              <Box h={1} bg="gray.600" rounded w={12}></Box>
                            </Box>
                            <Box textAlign="right">
                              <Text fontSize="xs" color="amber.600" fontWeight="bold">4.8</Text>
                              <Text fontSize="xs" color="amber.400">⭐⭐⭐⭐⭐</Text>
                            </Box>
                          </Flex>
                          <Box mb={2}>
                            <Box h={1} bg="gray.400" rounded w="100%"></Box>
                            <Box h={1} bg="gray.400" rounded w="80%"></Box>
                            <Box h={1} bg="gray.400" rounded w="75%"></Box>
                          </Box>
                          {/* Highlights */}
                          <SimpleGrid columns={3} spacing={1} mb={2}>
                            <Box bg="green.50" rounded p={1} textAlign="center">
                              <Text fontSize="xs">☕</Text>
                            </Box>
                            <Box bg="blue.50" rounded p={1} textAlign="center">
                              <Text fontSize="xs">🏠</Text>
                            </Box>
                            <Box bg="purple.50" rounded p={1} textAlign="center">
                              <Text fontSize="xs">🍰</Text>
                            </Box>
                          </SimpleGrid>
                          {/* User info */}
                          <Flex align="center" justify="space-between" pt={2} borderTop="1px solid #e2e8f0">
                            <Flex align="center">
                              <Box w={4} h={4} bgGradient="linear(to-r, blue.400, purple.500)" rounded="full" mr={1}></Box>
                              <Box h={1} bg="gray.600" rounded w={8}></Box>
                            </Flex>
                            <Flex gap={1}>
                              <Box bg="gray.100" rounded px={1} py={0.5}>
                                <Box h={1} bg="gray.600" rounded w={4}></Box>
                              </Box>
                              <Box bg="blue.500" rounded px={1} py={0.5}>
                                <Box h={1} bg="white" rounded w={4}></Box>
                              </Box>
                            </Flex>
                          </Flex>
                        </Box>
                      </Box>
                      {/* Additional reviews */}
                      <Box bg="white" rounded="lg" p={2}>
                        <Box h={1} bg="gray.800" rounded mb={2} w={16}></Box>
                        <Box>
                          <Flex align="center" gap={1}>
                            <Box w={2} h={2} bgGradient="linear(to-r, green.400, blue.500)" rounded="full"></Box>
                            <Box h={1} bg="gray.400" rounded flex={1}></Box>
                          </Flex>
                          <Flex align="center" gap={1}>
                            <Box w={2} h={2} bgGradient="linear(to-r, pink.400, red.500)" rounded="full"></Box>
                            <Box h={1} bg="gray.400" rounded flex={1}></Box>
                          </Flex>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {/* Floating Badge */}
                <Box position="absolute" top={-4} right={-4} bgGradient="linear(to-r, green.400, blue.500)" color="white" px={4} py={2} rounded="full" shadow="lg" transform="rotate(12deg)">
                  <Text fontSize="sm" fontWeight="bold">¡Exitoso!</Text>
                </Box>
              </Box>
            </Stack>
          </Box>
          {/* Bottom CTA Section */}
          <Box bgGradient="linear(to-r, gray.50, blue.50)" px={8} py={8} textAlign="center" borderTop="1px solid #e2e8f0">
            <Heading size="lg" color="gray.800" mb={4}>¿Listo para tu próximo proyecto?</Heading>
            <Text color="gray.600" mb={6} maxW="2xl" mx="auto">
              Transformemos tu idea en una experiencia web excepcional que conecte con tus usuarios y haga crecer tu negocio.
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} gap={4} justify="center">
              <Button
                bg="indigo.600"
                color="white"
                px={8}
                py={3}
                rounded="xl"
                fontWeight="semibold"
                _hover={{ bg: "indigo.700" }}
                transition="colors 0.2s"
              >
                Iniciar Proyecto
              </Button>
              <Button
                border="2px solid"
                borderColor="indigo.600"
                color="indigo.600"
                bg="transparent"
                px={8}
                py={3}
                rounded="xl"
                fontWeight="semibold"
                _hover={{ bg: "indigo.600", color: "white" }}
                transition="all 0.2s"
              >
                Ver Más Trabajos
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

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