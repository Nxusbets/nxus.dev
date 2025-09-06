import { Box, Heading, Text, SimpleGrid, HStack, Container } from '@chakra-ui/react';

export default function SaasPage() {
  return (
    <Box bgGradient="linear(to-br, slate.50, blue.50)" minH="100vh" py={0} px={0}>
      <Container maxW="container.xl" px={{ base: 2, md: 6 }}>
        <Box bg="white" rounded={{ base: "xl", md: "3xl" }} shadow="2xl" overflow="hidden">
          <Box p={{ base: 3, sm: 6, lg: 12 }}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 6, md: 12 }} alignItems="center">
              {/* Texto y características */}
              <Box>
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
                  Sistema SaaS para Punto de Venta
                </Heading>
                <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} mb={6}>
                  Desarrollamos una plataforma SaaS para tiendas y negocios que permite gestionar ventas, inventario, clientes y reportes desde cualquier dispositivo. El sistema es accesible en la nube, fácil de usar y escalable para cualquier tamaño de empresa.
                </Text>
                <Heading size="md" color="gray.800" mb={2}>Características Principales:</Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} mb={6}>
                  <HStack>
                    <Box w={8} h={8} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                      <Text color="green.600" fontSize="sm">✓</Text>
                    </Box>
                    <Text color="gray.700">Gestión de ventas, inventario, gastos, etc</Text>
                  </HStack>
                  <HStack>
                    <Box w={8} h={8} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                      <Text color="green.600" fontSize="sm">✓</Text>
                    </Box>
                    <Text color="gray.700">Acceso desde cualquier dispositivo</Text>
                  </HStack>
                  <HStack>
                    <Box w={8} h={8} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                      <Text color="green.600" fontSize="sm">✓</Text>
                    </Box>
                    <Text color="gray.700">Reportes personalizables</Text>
                  </HStack>
                  <HStack>
                    <Box w={8} h={8} bg="green.100" rounded="full" display="flex" alignItems="center" justifyContent="center">
                      <Text color="green.600" fontSize="sm">✓</Text>
                    </Box>
                    <Text color="gray.700">Soporte y actualizaciones en la nube</Text>
                  </HStack>
                </SimpleGrid>
                <Box bgGradient="linear(to-r, blue.50, indigo.50)" rounded="2xl" p={6} mb={6}>
                  <Heading size="sm" color="gray.800" mb={3}>Resultados Obtenidos:</Heading>
                  <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} textAlign="center">
                    <Box>
                      <Text fontSize="2xl" fontWeight="bold" color="blue.600">+200%</Text>
                      <Text fontSize="sm" color="gray.600">Eficiencia</Text>
                    </Box>
                    <Box>
                      <Text fontSize="2xl" fontWeight="bold" color="green.600">5.0★</Text>
                      <Text fontSize="sm" color="gray.600">Satisfacción</Text>
                    </Box>
                    <Box>
                      <Text fontSize="2xl" fontWeight="bold" color="purple.600">100%</Text>
                      <Text fontSize="sm" color="gray.600">Personalizable</Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </Box>
              {/* Miniatura SaaS con badge */}
              <Box position="relative" w="100%" maxW={{ base: "100%", md: "420px" }} mx="auto">
                <img
                  src="/SaaS.png"
                  alt="SaaS"
                  style={{
                    width: "100%",
                    maxWidth: "420px",
                    borderRadius: "1.5rem",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
                    objectFit: "cover"
                  }}
                />
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
                  <Text fontWeight="bold">¡Administración total!</Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

